import React from 'react'
import styled from 'styled-components'
import { FaEnvelope, FaUniversity } from 'react-icons/fa'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 40px 0px;
  @media (max-width: 960px) {
    padding: 0px;
  }
`

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`

const ContactItem = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.primary};
  border-radius: 50%;
  color: white;
`

const Contact = () => {
  return (
    <Container id="contact">
      <Wrapper>
        <Title>Contact Me</Title>
        <Desc>Feel free to reach out to me via email:</Desc>
        <ContactItem href="mailto:jayasurya.guna@gmail.com">
          <IconWrapper>
            <FaEnvelope size={20} />
          </IconWrapper>
          jayasurya.guna@gmail.com
        </ContactItem>
        <ContactItem href="mailto:jxg0437@mavs.uta.edu">
          <IconWrapper>
            <FaUniversity size={20} />
          </IconWrapper>
          jxg0437@mavs.uta.edu
        </ContactItem>
      </Wrapper>
    </Container>
  )
}

export default Contact