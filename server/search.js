const uuid        = require('uuid')
const fs          = require('fs')
const matter      = require('gray-matter')
const elasticlunr = require('elasticlunr')

const membersFolder = `${__dirname}/../src/members/`
const files         = fs.readdirSync(membersFolder)

const memberLookup = {}
const members = files.map(f => {
  const member = matter.read(`${membersFolder}${f}`).data
  if (member.link) {
    member.domain = member.link.replace(new RegExp("(http|https)://(www.|)"), "").replace(new RegExp("/.*$"), "")
  }
  member.id = uuid()
  memberLookup[member.id] = member
  return member
})

const index = elasticlunr(function () {
  this.addField('id')
  this.addField('title')
  this.addField('description')
  this.addField('email')
  this.addField('link')
  this.addField('domain')
  this.saveDocument(true)

  members.forEach(function (doc) {
    this.addDoc(doc)
  }, this)
})

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
shuffleArray(members)

module.exports = (q, offset = 0, limit = 5) => {
  const opts = {
    fields: {
      title: {boost: 2},
      description: {boost: 1},
      email: {boost: 1},
      link: {boost: 1},
      domain: {boost: 5}
    },
    boolean: "AND",
    expand: true
  }

  let result = {offset, limit}

  if (q) {
    const rows = index.search(q, opts)
    result.count = rows.length
    result.rows = rows.slice(offset, offset + limit).map(m => memberLookup[m.ref])
  } else {
    result.count = members.length
    result.rows = members.slice(offset, offset + limit)
  }

  return result
}