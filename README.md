# Voice Memos

A voice memo application built with React and TypeScript with real-time speech recognition support.

## Idea and Concept

Voice Memos app is created to solve the everyday task of quickly creating and managing text notes using voice input. The main idea is seamless integration of voice input with traditional text editing, providing maximum productivity and usability.

### Key design principles:

1. **Voice-first**: Voice input is the primary interaction method, text editing is supplementary
2. **Real-time**: Instant speech-to-text transcription without delays
3. **Intelligent processing**: Automatic punctuation and text formatting
4. **Minimalism**: Clean interface without distracting elements
5. **Autonomy**: Full offline functionality, all data stored locally

## Architecture and Technical Solutions

### Architectural principles

The application is built on **component architecture** with clear separation of concerns:

#### 1. Data Layer

```
services/memoService.ts - Business logic for memo operations
utils/localStorage.ts - Abstraction over browser storage
types/ - Data typing (domain.ts, api.ts)
```

#### 2. State Layer

```
hooks/useMemoManager.ts - Memo state management
hooks/useSpeech.ts - Speech recognition management
hooks/useCursorSelection.ts - Cursor position tracking
```

#### 3. Presentation Layer

```
components/ - React components with modular CSS styles
Layout/Main.tsx - Main application container
```

### Key technical solutions

#### 1. State management

Instead of external state libraries, **React hooks composition** is used:

- `useMemoManager` - central hook for memo management
- Local component state for UI-specific logic. However, when scaling the app, a state manager should be used.

#### 2. Speech processing

Custom wrapper over **Web Speech API** with solutions for its limitations:

- For example, bypassing the 60-second limit

#### 3. Intelligent text processing

Automatic formatting system created:

- Recognition of voice punctuation commands ("comma", "period", "question mark" and "exclamation mark")
- Automatic capitalization after punctuation marks
- Smart space insertion during voice input

#### 4. Auto-save with debouncing

### Architectural patterns

#### 1. Service Layer Pattern

All business logic is encapsulated in services with dependency injection:

```typescript
interface IStorage {
  get<T>(key: string): T | null;
  set<T>(key: string, value: T): boolean;
  remove(key: string): void;
}

class MemoService {
  constructor(private storage: IStorage) {}
  
  getAllMemos(): Memo[],
  saveAllMemos(memos: Memo[]): boolean,
  createEmptyMemo(): Memo,
  // ...
}
```

#### 2. Repository Pattern

Abstraction over localStorage for unified data operations:

```typescript
export const ls = {
  get<T>(key: string): T | null,
  set<T>(key: string, value: T): boolean,
  remove(key: string): void
}
```

#### 3. Transformer Pattern

Separation of data models for API and domain:

```typescript
export const memoTransformers = {
  serialize: (memo: Memo): MemoDTO,
  deserialize: (dto: MemoDTO): Memo
}
```

## UX/UI Solutions

### 1. Visual feedback

- **Real-time**: Highlighting of recognized text during recording
- **Status indicators**: "Saving..." / "Saved" with animated icons
- **Active state**: Visual highlighting of active memo and record button

### 2. Intelligent input

- **Contextual insertion**: Smart positioning of voice text at selected position
- **Selection preservation**: Remembering cursor position for precise insertion
- **Formatting**: Automatic addition of spaces and capital letters

### 3. Responsiveness

- **CSS Grid/Flexbox**: Adaptive two-column layout
- **CSS Custom Properties**: Centralized color and size system
- **Media queries**: Minimal optimization for mobile devices

## Technology Stack

- **React 19** - UI library with latest features
- **TypeScript** - Static typing for reliability
- **Vite** - Fast build and development
- **CSS Modules** - Isolated component styles
- **ESLint** - Code linting
- **Vitest** - Testing
- **PostCSS** - CSS processing
- **SVGR** - SVG processing as components

## Quick Start

### Requirements

- Node.js 18+
- Google Chrome browser

### Installation and launch

```bash
# Clone repository
git clone <repository-url>
cd voice-memos

# Install dependencies
npm install

# Run in development mode
npm run dev

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

### Testing

```bash
# Run tests
npm test

# Linting
npm run lint
```

## Future Development

- Group memos by days
- Full-text search through memos
- Language selection, including for SpeechRecognition
- i18n
- Dark/light theme design
- Export memos
- More tests, but better e2e
- Simple state manager like Zustand
