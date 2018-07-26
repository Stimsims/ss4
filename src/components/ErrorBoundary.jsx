import MyError from './../Error.js';
import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    componentDidCatch(error, info) {
        console.log("ErrorBoundary componentDidCatch");
      // Display fallback UI
      this.setState({ hasError: true });
      // You can also log the error to an error reporting service
      //logErrorToMyService(error, info);
      MyError(error, info); //if an error is thrown here, breaks app, no error boundary to catch
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <h1>Something went wrong.</h1>;
      }
      return this.props.children;
    }
  }
  
ErrorBoundary.displayName = 'errorboundary';
export default ErrorBoundary;