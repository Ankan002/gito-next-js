import React from 'react';
import Head from 'next/head';

interface HeadProps {
    title: String | string | null | undefined
}

const CommonHead = (props: HeadProps) => {

  const {title} = props

  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
};

export default CommonHead;
