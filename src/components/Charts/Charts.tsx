import React from 'react';
import {LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid} from 'recharts';
import {data} from "../../helpers/data";
import styles from './Charts.module.css'

const Charts = () => {
  return (
    <div className={styles.charts} >
      <h3 className={styles.chartTitle}>Sales Analytics</h3>
      <ResponsiveContainer width="100%" aspect={4} >
                <LineChart data={data}>
                  <XAxis dataKey="name" stroke="#5550bd" />
                  <Line type="monotone" dataKey="Active User" stroke="#5550bd"  />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid stroke="#e0defd" strokeDasharray="5 5"/>
                <Line type="monotone" dataKey="Month" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
    </div>
  )
}

export default Charts;
