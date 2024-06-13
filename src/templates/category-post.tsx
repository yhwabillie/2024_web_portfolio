import * as React from 'react'
import DetailLayout from '../components/DetailLayout'
import { HeadFC } from 'gatsby'
import SEO from '../components/Seo'

export default function CategoryPostTemplate() {
  return <DetailLayout category="" title="" nextList={[]} />
}

export const Head: HeadFC = () => <SEO title="카테고리 컨텐츠" description="카테고리 컨텐츠 내용 입니다." />
