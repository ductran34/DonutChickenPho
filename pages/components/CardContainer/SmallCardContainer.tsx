import React from 'react'
import styled from 'styled-components';

const Card = styled.div`
  background-color: #1f2631;
  border: 2px solid #fb4959;
  height: 15rem;
  width:  12rem;
`;

function SmallCardContainer() {
  return (
    <div>
        {/*======== Title of Container ============ */}
        <div>
            Donuts
        </div>
        {/*======== List Item of Container ============ */}
        <div className="h-full w-full px-[5rem] bg-pink-500 grid gap-4 grid-cols-4 place-items-center">
                <Card>s</Card>
                <Card>s</Card>
                <Card>s</Card>
                <Card>s</Card>
                <Card>s</Card>
                <Card>s</Card>
                <Card>s</Card>
        </div>
    </div>
  )
}

export default SmallCardContainer