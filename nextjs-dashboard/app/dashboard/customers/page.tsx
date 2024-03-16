import { headers } from 'next/headers'

export default function Page() {
  const headersList = headers()
  console.log(headersList.get('x-hello-from-middleware1'))

  return <p>Customers Page</p>;
}
