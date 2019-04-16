import React from 'react'

export default class ContentContainer extends React.Component {
  constructor(props) {
    super()
    this.content = null;
  }


  componentDidMount() {
    const template = document.createElement( 'template' )
    template.innerHTML = this.props.content;

    const scripts = template.content.querySelectorAll( "script" );

    scripts.forEach(( script ) => {
      const s = document.createElement( 'script' );
      s.type = 'text/javascript';
      s.async = true;
      s.innerHTML = script.innerHTML
      s.src = script.src
      s.id = script.id

      script.replaceWith(s)
    })
    this.content.appendChild(template.content);
  }

  render() {
    return (
      <div ref={el => (this.content = el)} dangerouslySetInnerHTML={{ __html: this.props.content }}/>
    )
  }
}
