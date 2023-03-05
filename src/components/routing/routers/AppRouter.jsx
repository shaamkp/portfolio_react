import React from 'react'
import styled from "styled-components";
import Aside from '../../ui/screens/Aside';

const AppRouter = () => {
  return (
    <div>
        <Main>
            <Aside />
        </Main>
    </div>
  )
}

export default AppRouter

const Main = styled.div``;
