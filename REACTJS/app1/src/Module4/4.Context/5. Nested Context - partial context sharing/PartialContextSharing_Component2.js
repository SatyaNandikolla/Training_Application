import React from 'react'
import PartialContextSharing_Function from './PartialContextSharing_Function';
import PartialContextSharing_Class from './PartialContextSharing_Class';

export default function PartialContextSharing_Component2(props) {

    return (
        <div>
            <PartialContextSharing_Function />

            <PartialContextSharing_Class />
        </div>
    )
}
