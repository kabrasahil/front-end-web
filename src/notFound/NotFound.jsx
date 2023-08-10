import React from 'react'
import Rive from '@rive-app/react-canvas';
import anim from './404_not_found.riv';

export default function NotFound() {
    return (
            <Rive src={anim} className='notFound overflow-x-hidden' />
    )
}
