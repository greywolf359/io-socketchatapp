import React, {Component} from 'react';
import reactDOM from 'react-dom';
import Header from './components/header';
import {Route, BrowserRouter, HashRouter} from 'react-router-dom';
import App from './components/app';



var element = document.getElementById('app');
reactDOM.render(<BrowserRouter><App/></BrowserRouter>
	,element);	
