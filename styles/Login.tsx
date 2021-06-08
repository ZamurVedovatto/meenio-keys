import styled from 'styled-components'

export default styled.section`
  .main-grid {
    min-height: 100vh;
    height: 100vh;
    width: 100%;
    .image-content {
      width: 100%;
      height: 100%;
      position: relative;
      background:linear-gradient(0deg, rgba(255, 0, 150, 0.3), rgba(255, 0, 150, 0.3)), url("https://images.pexels.com/photos/374697/pexels-photo-374697.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260");
      background-size: cover;
    }
    .form-content {
      padding: 1rem;
      .form-wrapper {
        display: flex;
        flex-direction: column;
        max-width: 400px;
        min-width: 400px;
        img.logo {
          width: 200px;
          height: auto;
        }
        .form-action {
          padding: 1rem;
          display: flex;
          justify-content: space-between;
          button {
            width: auto;
            &:first-child {
              width: 65%;
            }
          }
        }
      }
    }
  }
`