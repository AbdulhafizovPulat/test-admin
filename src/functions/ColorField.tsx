import * as React from 'react';
import { FunctionField } from 'react-admin';

export const ColorField = (props : any) => (
    <FunctionField
        {...props}
        render={(record : any) => (
            <div
                style={{
                    width: 25,
                    height: 25,
                    backgroundColor: record[props.source],
                }}
            />
        )}
    />
);