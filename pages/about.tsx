import Head from 'next/head'
import { useState } from 'react'
import Modal from 'components/ModalComp'

const About = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <Head>
        <title>Meenio | About</title>
        <meta name="keywords" content="about"></meta>
      </Head>
      <div>
        about
      </div>

      {/* <Modal show={showModal} handleClose={() => setShowModal(false)}>
        <p>Modal</p>
      </Modal> */}
    </>
  );
}

export default About