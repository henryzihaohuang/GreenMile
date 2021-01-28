import React, { PureComponent } from 'react';
import {
    LineChart, Line, XAxis, YAxis, Tooltip
} from 'recharts';

class Graph extends PureComponent {

    render() {
        return (

            <LineChart width={70} height={44} data={this.props.data} >
                <Line type="monotone" dataKey="close" stroke="#2fc802" strokeWidth={1} dot={0} />
            </LineChart>
        );
    }
}
export default Graph;