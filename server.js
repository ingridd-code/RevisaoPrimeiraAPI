const express = require('express');
const express = require('cors');

// import express from "express";
// impor cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
