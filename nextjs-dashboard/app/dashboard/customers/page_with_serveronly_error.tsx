'use client'

// import { headers } from 'next/headers'
import { serverOnlyFn } from './serverOnlyFn';

export default function Page() {
  // const headersList = headers()
  // console.log(headersList.get('x-hello-from-middleware1'))

  function handleClick() {
    serverOnlyFn();
  }

  return (
    <>
    <p >Customers Page</p>
    <button onClick={handleClick}>Click me</button>
    </>
  );
}
