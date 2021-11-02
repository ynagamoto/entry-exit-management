import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function test({ posts }) {
  return (
    <dvi>
      <h1>Test</h1>
      <h2>JSON 一覧</h2>
        <ul>
          <li>{posts.Status}</li>
          <li>{posts.DB}</li>
        </ul>
    </dvi>
  )
}

export async function getServerSideProps() {
  const res = await fetch('http://management-api:8080/');
  const posts = await res.json();
  return { props: { posts  }  };
}
