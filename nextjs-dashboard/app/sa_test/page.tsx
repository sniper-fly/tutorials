'use client';
import { hoge } from './hoge';

export default function Page() {
  function handleClick() {
    hoge();
  }

  return <button onClick={handleClick}>hoge!</button>;
}
