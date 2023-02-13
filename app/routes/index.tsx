import ReactMarkdown from 'react-markdown'

export default function IndexPage() {
  const md = '# hello world\n\nfoobar'
  return <ReactMarkdown>{md}</ReactMarkdown>
}
