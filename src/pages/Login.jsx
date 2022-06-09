import styled from "styled-components"
import React from "react"

const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  /* font-family: "Press Start 2P", cursive;
  font-family: "Roboto", sans-serif; */
  background-color: rgb(244, 246, 248);
`

const Container = styled.div`
  display: flex;
  width: 1100px;
`

const ImageContainer = styled.div`
  width: 50%;
  display: block;
`
const Image = styled.img`
  height: 80vh;
  width: 90%;
  object-fit: cover;
`

const FormContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px;
  border-radius: 40px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`

const Form = styled.form`
  width: 90%;
`
const Title = styled.h1`
  font-size: 40px;
  font-weight: 300;
  margin-bottom: 40px;
  text-align: center;
`
const InputContainer = styled.div`
  margin-bottom: 10px;
`
const Label = styled.label`
  display: block;
  font-size: 18px;
  font-weight: 400;
`
const Span = styled.span`
  color: red;
  font-size: 22px;
`
const Input = styled.input`
  width: 100%;
  font-size: 20px;
  padding: 7px 10px;
  margin: 10px 0;
  border-radius: 5px;
`
const ForgetContainer = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 10px;
`
const Link = styled.a`
  color: #ff6600;
  text-decoration: none;
  font-weight: 600;
`
const Button = styled.button`
  width: 100%;
  text-align: center;
  padding: 10px 0;
  color: white;
  background-color: rgb(49, 159, 188);
  font-size: 22px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  margin-top: 40px;
  border-radius: 5px;
  margin-bottom: 20px;
`
const QuestionContainer = styled.div``
const Question = styled.p`
  text-align: center;
`
const LinkContainer = styled.span``

const Login = () => {
  return (
    <Body>
      <Container>
        <ImageContainer>
          <Image src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" />
        </ImageContainer>

        <FormContainer>
          <Form>
            <Title>Đăng nhập tài khoản</Title>
            <InputContainer>
              <Label>
                Email
                <Span class="vip">(*)</Span>
              </Label>
              <Input placeholder="Tên đăng nhập hoặc email" type="email" />
            </InputContainer>

            <InputContainer>
              <Label>
                Mật khẩu
                <Span class="vip">(*)</Span>
              </Label>
              <Input placeholder="Nhập mật khẩu" type="text" />
            </InputContainer>

            <ForgetContainer>
              <Link href="/New folder/New Smallfolder/mk.html" class="text">
                Quên mật khẩu?
              </Link>
            </ForgetContainer>

            <Button>Đăng nhập</Button>
            <QuestionContainer>
              <Question>
                Bạn chưa có tài khoản?
                <LinkContainer>
                  <Link href="/New folder/index.html">Đăng ký tài khoản</Link>
                </LinkContainer>
              </Question>
            </QuestionContainer>
          </Form>
        </FormContainer>
      </Container>
    </Body>
  )
}

export default Login
