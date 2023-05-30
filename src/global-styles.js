import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    background-color: #000000;
    color: #333333;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

	.ReactModal__Overlay {
		display: flex;
		justify-content: center;
		align-items: center;
		position: fixed;
		inset: 0px;
		padding: 1rem;
		min-height: 100%;
		background-color: rgba(0, 0, 0, 0.75) !important;
	}

	.ReactModal__Content {
		width: 100%; 
		max-width: 28rem; 
		padding: 1.5rem; 
		vertical-align: middle; 
		text-align: left; 
		background-color: #ffffff; 
		opacity: 1;
		overflow: hidden; 
		border-radius: 1rem; 
		box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); 
		transition-property: all; 
		--transform-scale-x: 1;
		--transform-scale-y: 1; 

		:focus-visible {
			outline: none;
		}
	}
}`;
