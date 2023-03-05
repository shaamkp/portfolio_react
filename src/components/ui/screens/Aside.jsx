import React from 'react'
import styled from "styled-components";
import DP from "../../../assets/images/dp.png"
import "../../../assets/css/style.css";

const Aside = () => {
  return (
      <>
          <AsideContainer>
              <Wrapper>
                  <AsideTopContainer>
                      <ProfileContainer>
                          <ProfileImage src={DP} alt="Image" />
                      </ProfileContainer>
                      <UserTitle>Shyamkumar P</UserTitle>
                  </AsideTopContainer>
                  <AsideMiddleContainer>
                      <Nav>
                          <List>Home</List>
                          <List>About Me</List>
                          <List>What I do</List>
                          <List>Resume</List>
                          <List>Portfolio</List>
                          <List>Testimonial</List>
                          <List>Contact</List>
                      </Nav>
                  </AsideMiddleContainer>
                  <AsideBottomContainer>
                      <SocialMediaContainer>
                          {/* <SocialMedia>Facebook</SocialMedia>
                          <SocialMedia>Instagram</SocialMedia> */}
                      </SocialMediaContainer>
                  </AsideBottomContainer>
              </Wrapper>
          </AsideContainer>
      </>
  );
}

export default Aside

const AsideContainer = styled.aside`
    width: 30%;
    height: 100vh;
    color: #fff;
    background: #000;
`;
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
`;
const AsideTopContainer = styled.div`
    padding: 15% 0 15% 0;
    width: 70%;
    margin: 0 auto;
`;
const ProfileContainer = styled.div`
    width: 100%;
`;
const ProfileImage = styled.img`
    width: 100%;
    display: block;
`;
const UserTitle = styled.h2`
    margin-top: 50px;
`;
const AsideMiddleContainer = styled.div``;
const Nav = styled.ul`
    margin: 0 auto;
    width: 40%;
`;
const List = styled.li`
    margin-top: 40px;
    &:first-child{
        margin-top:0px
    }
`;
const AsideBottomContainer = styled.div`
    margin: 0 auto;
    width: 40%;
`;
const SocialMediaContainer = styled.ul``;
const SocialMedia = styled.li``;