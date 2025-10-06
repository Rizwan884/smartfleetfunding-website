import { useEffect } from 'react'

export default function Trustpilot() {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src =
      '//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js'
    script.async = true
    document.body.appendChild(script)
  }, [])
  return (
    <div className="font-montserrat row m-2">
      <div
        className="trustpilot-widget"
        data-locale="en-US"
        data-template-id="5419b6ffb0d04a076446a9af"
        data-businessunit-id="651eee7bdc20b7a783b5b73e"
        data-style-height="20px"
        data-style-width="100%"
        data-theme="light"
      >
        <a
          href="https://www.trustpilot.com/review/smartfleetfunding.com"
          target="_blank"
          rel="noopener"
        >
          Trustpilot
        </a>
      </div>
    </div>
  )
}
