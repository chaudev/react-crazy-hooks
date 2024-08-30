# React Crazy Hooks

📚 Tài liệu TIẾNG VIỆT (Vietnamese Documents): [XEM NGAY](https://thatthuvi.com/lap-trinh/react-crazy-hooks)

react crazy hooks is a collection of custom hooks for React, designed to simplify common tasks in both JavaScript and TypeScript projects. The library currently includes the following hooks:

- `useWindowDimensions`
- `useClipboard`
- `useIpAddress`
- `useModalState`
- `useURLParams`

### Update 1.0.2

- `useLocalStorage`
- `useFetch`
- `useDebounce`
- `usePrevious`
- `useOnClickOutside`

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

### useDebounce

Debounce a value.

```javascript
import { useDebounce } from "react-crazy-hooks";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  // Use debouncedSearchTerm for API calls or other side effects

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <p>Debounced Value: {debouncedSearchTerm}</p>
    </div>
  );
}
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

### useLocalStorage

Manage state with Local Storage.

```javascript
import { useLocalStorage } from "react-crazy-hooks";

function App() {
  const [name, setName] = useLocalStorage("name", "John Doe"); // "name" = key, "John Doe" = initialValue

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>{name}</p>
    </div>
  );
}
```

### useFetch

Fetch data from an API.

```javascript
import { useFetch } from "react-crazy-hooks";

function App() {
  const { data, loading, error } = useFetch("https://api.thatthuvi.com/data");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
```

### usePrevious

Store the previous value of a variable.

```javascript
import { usePrevious } from "react-crazy-hooks";

function App() {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  useEffect(() => {
    console.log(`Current: ${count}, Previous: ${prevCount}`);
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Current Count: {count}</p>
      <p>Previous Count: {prevCount}</p>
    </div>
  );
}
```

### useOnClickOutside

Detect clicks outside of a specified element.

```javascript
import { useOnClickOutside } from "react-crazy-hooks";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useOnClickOutside(ref, () => setIsOpen(false));

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Menu</button>
      {isOpen && (
        <div ref={ref}>
          <p>Click outside of this box to close it.</p>
        </div>
      )}
    </div>
  );
}
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on GitHub.

## Author

Nguyen Phuc Bao Chau - [GitHub Profile](https://github.com/chaudev)

## License

This project is licensed under the MIT License.

## Keywords

react hook, react crazy hooks, react custom hooks
