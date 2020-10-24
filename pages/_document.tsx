import Document, { Html, Main, Head, NextScript} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="description" content="Imager Production Short Video Ads Made Easy" />
          <meta name="keywords" content="​รับทำวิดีโอโฆษณา สั้นๆ ความยาวไม่ถึงนาที ง่ายๆ และเป็นระบบ เพียงสร้างโปรเจกต์. ยืนยันราคา. ตรวจสอบและคอมเมนต์งาน.ตั้งแต่ Pre-Production ถึง Post-Production และ รับไฟล์วิดีโอของคุณ." />

          <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Kanit:wght@200;400;600&display=swap" />
          <meta name="theme-color" content="#ae57c8" />
        </Head>
        <body  className="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument;