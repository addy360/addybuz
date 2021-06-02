import Head from "next/head";
import Layout from "../components/Layouts";
import ContactForm from "../components/Layouts/contact/ContactForm";
import ContactInfo from "../components/Layouts/contact/ContactInfo";
const Contact = () => {
  return (
    <Layout>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          href="/static/styles/contact_styles.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="/static/styles/contact_responsive.css"
        />
        <title>AddyBuz | Contact Us</title>
      </Head>
      <ContactInfo />
      <ContactForm />
    </Layout>
  );
};

export default Contact;
