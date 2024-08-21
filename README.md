# React Crazy Hooks

`react-crazy-hooks` is a collection of custom hooks for React, designed to simplify common tasks in both JavaScript and TypeScript projects. The library currently includes the following hooks:

- `useWindowDimensions`
- `useClipboard`
- `useIpAddress`
- `useModalState`
- `useURLParams`

More hooks will be added in future updates.

## Installation

You can install react-crazy-hooks via bun, npm or yarn:

### Using bun

```bash
bun add react-crazy-hooks
```

### Using npm

```bash
npm install react-crazy-hooks
```

### Using yarn

```bash
yarn add react-crazy-hooks
```

## Usage

### useWindowDimensions

This hook provides the current width and height of the window.

```javascript
import { useWindowDimensions } from "react-crazy-hooks";

const WindowDimensionsComponent = () => {
  const { width, height } = useWindowDimensions();

  return (
    <div>
      <p>Width: {width}px</p>
      <p>Height: {height}px</p>
    </div>
  );
};
```

### useClipboard

This hook allows you to copy text to the clipboard.

```javascript
import { useClipboard } from "react-crazy-hooks";

const ClipboardComponent = () => {
  const { copied, copyToClipboard } = useClipboard();

  return (
    <div>
      <button onClick={() => copyToClipboard("React Crazy Hooks")}>
        Copy to Clipboard
      </button>

      {copied && <p>Copied: {copied}</p>}
    </div>
  );
};
```

### useIpAddress

This hook fetches the user’s IP address.

```javascript
import { useIpAddress } from "react-crazy-hooks";

const IpAddressComponent = () => {
  const { ipAddress, error, isLoading } = useIpAddress();

  return (
    <div>
      <p>Your IP Address: {isLoading ? "Loading..." : ipAddress.ip}</p>
      <p>Your Country: {isLoading ? "Loading..." : ipAddress.country}</p>
    </div>
  );
};
```

### useModalState

This hook manages the state of a modal.

```javascript
import { useModalState } from "react-crazy-hooks";

const ModalComponent = () => {
  const { visible, closeModal, openModal, toggle } = useModalState();

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      {visible && (
        <div>
          <p>This is a modal!</p>
          <button onClick={closeModal}>Close Modal</button>
        </div>
      )}
    </div>
  );
};
```

### useURLParams

This hook provides easy access to URL parameters.

```javascript
import { useURLParams } from "react-crazy-hooks";

const URLParamsComponent = () => {
  const params = useURLParams();

  console.log("Query Parameters: ", params);

  return <div></div>;
};
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on GitHub.

## Author

Nguyen Phuc Bao Chau - [GitHub Profile](https://github.com/chaudev)

## License

This project is licensed under the MIT License.
