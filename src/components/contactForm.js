import React from "react"

export default function ContactForm() {
  const dubsadoForm = `
  <div style="width: 90%">
  <script
  type="text/javascript"
  src="https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.5.14/iframeResizer.min.js"
></script>
<iframe
  src="https://hello.dubsado.com:443/public/form/view/61afaaa68efb95b42c1392ef"
  ;
  frameborder="0"
  style="width: 100%; min-width: 100%; height: 850px"
></iframe>
<script type="text/javascript">
  setTimeout(function () {
    iFrameResize({checkOrigin: false, heightCalculationMethod: 'taggedElement'})
  }, 30)
</script>
</div>
  `

  return (
    <div
      className="flex justify-center bg-primary-base px-6 py-10 md:p-0"
      id="contact-form"
      dangerouslySetInnerHTML={{ __html: dubsadoForm }}
    ></div>
  )
}
