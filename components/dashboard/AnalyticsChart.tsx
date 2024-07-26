'use client';

import React, { useState } from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import data from '@/data/analytics';

const availableFilters = [
  {
    value: "uv",
    label: "Unique Visitors",
  },
  {
    value: "pv",
    label: "Page Views",
  },
  {
    value: "amt",
    label: "Amount",
  }
]

const AnalyticsChart = () => {

  const [selection, setSelection] = useState("pv");

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Analytics For This Year</CardTitle>
          <CardDescription>Views Per Month</CardDescription>
          <Select onValueChange={setSelection} defaultValue="pv">
          <SelectTrigger className="w-96 h-8">
            <SelectValue placeholder="Select Account" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
             {availableFilters.map((filter) => (
                <SelectItem key={filter.value} value={filter.value}>
                  {filter.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        </CardHeader>
        <CardContent>
          <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
              <LineChart width={1100} height={300} data={data}>
                <Line type='monotone' dataKey={selection} stroke='#8884d8' />
                <CartesianGrid stroke='#ccc' />
                <XAxis dataKey='name' />
                <YAxis />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default AnalyticsChart;
