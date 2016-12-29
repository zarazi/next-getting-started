import React from 'react'
import Head from 'next/head'
import {Header, Grid, Segment, Divider} from 'semantic-ui-react'
import Page from '../layouts/main'

export default class extends React.Component {
  static async getInitialProps(url) {}
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Page pathname={this.props.url.pathname} title={`KK-Pedia`}>
        <Header as="h1" dividing>Latest Story</Header>
        <Grid stackable divided relaxed>
          <Grid.Row stretched>
            <Grid.Column width="10">
              { [1,2,3].map( i => <MainContent key={i} />) }
            </Grid.Column>
            <Grid.Column width="6">
              { [1,2,3,4,5].map( i => <MinorContent key={i} />) }
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Divider hidden/>
      </Page>
    )
  }
}

const MainContent = () => (
  <Segment vertical padded>
    <Header as="h3">ทำไมจึงต้องนำมาใช้</Header>
    <p>
      มีหลักฐานที่เป็นข้อเท็จจริงยืนยันมานานแล้ว
      ว่าเนื้อหาที่อ่านรู้เรื่องนั้นจะไปกวนสมาธิของคนอ่านให้เขวไปจากส่วนที้เป็น Layout
      เรานำ Lorem Ipsum มาใช้เพราะความที่มันมีการกระจายของตัวอักษรธรรมดาๆ แบบพอประมาณ
      ซึ่งเอามาใช้แทนการเขียนว่า ‘ตรงนี้เป็นเนื้อหา, ตรงนี้เป็นเนื้อหา' ได้
      และยังทำให้มองดูเหมือนกับภาษาอังกฤษที่อ่านได้ปกติ
      ปัจจุบันมีแพ็กเกจของซอฟท์แวร์การทำสื่อสิ่งพิมพ์ และซอฟท์แวร์การสร้างเว็บเพจ (Web
      Page Editor) หลายตัวที่ใช้ Lorem Ipsum เป็นแบบจำลองเนื้อหาที่เป็นค่าตั้งต้น
      และเวลาที่เสิร์ชด้วยคำว่า 'lorem ipsum'
      ผลการเสิร์ชที่ได้ก็จะไม่พบบรรดาเว็บไซต์ที่ยังคงอยู่ในช่วงเริ่มสร้างด้วย
      โดยหลายปีที่ผ่านมาก็มีการคิดค้นเวอร์ชั่นต่างๆ ของ Lorem Ipsum ขึ้นมาใช้
      บ้างก็เป็นความบังเอิญ บ้างก็เป็นความตั้งใจ (เช่น การแอบแทรกมุกตลก)
    </p>
  </Segment>
)

const MinorContent = () => (
  <Segment vertical padded>
    <Header as="h5">มันมีที่มาอย่างไร</Header>
    <p>
      ตรงกันข้ามกับความเชื่อที่นิยมกัน Lorem Ipsum
      ไม่ได้เป็นเพียงแค่ชุดตัวอักษรที่สุ่มขึ้นมามั่วๆ
      แต่หากมีที่มาจากวรรณกรรมละตินคลาสสิกชิ้นหนึ่งในยุค 45 ปีก่อนคริสตศักราช
      ทำให้มันมีอายุถึงกว่า 2000 ปีเลยทีเดียว ริชาร์ด แมคคลินท็อค ศาสตราจารย์ชาว ...
    </p>
  </Segment>
)
