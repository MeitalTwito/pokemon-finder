import { Component } from "react";

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="err-msg">
          There was an error. <br />
          <button onClick={() => window.location.reload(true)}>
            Click here
          </button>
          to back to the home page.
        </div>
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
