import React, {PureComponent} from 'react';
import {
    LineChart, Line, XAxis, YAxis, Tooltip
} from 'recharts';

class Graph extends PureComponent {

    render() {
        return (
            
            <LineChart width={620} height={250} data={this.props.data} >
                <Tooltip />
                    <Line type="monotone" dataKey="close" stroke="#2fc802" strokeWidth={3.5} dot={0} />
            </LineChart>
        );
    }
}
export default Graph;