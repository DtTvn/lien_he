import { renderPage } from 'vike/server'

export default async (req: any, res: any) => {
  const pageContextInit = {
    urlOriginal: req.url
  }

  const pageContext = await renderPage(pageContextInit)

  if (pageContext.httpResponse) {
    const { body, statusCode, contentType } = pageContext.httpResponse
    res.statusCode = statusCode
    res.setHeader('Content-Type', contentType)
    res.end(body)
  } else {
    res.statusCode = 404
    res.end('Page not found')
  }
}
