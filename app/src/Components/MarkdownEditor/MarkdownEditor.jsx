import { useEffect, useRef } from 'react';
import Editor from '@toast-ui/editor';

const MarkdownEditor = ({ height = '500px', onContentChange }) => {
  const containerRef = useRef(null);

  const onContentChangeRef = useRef(onContentChange);

  useEffect(() => {
    onContentChangeRef.current = onContentChange;
  }, [onContentChange]);

  useEffect(() => {
    const editor = new Editor({
      el: containerRef.current,
      initialEditType: 'markdown',
      previewStyle: 'vertical',
      height,
    });

    editor.addHook('change', () => {
      const content = editor.getMarkdown();
      if (onContentChangeRef.current) {
        onContentChangeRef.current(content);
      }
    });

    return () => editor.destroy();
  }, []);

  return (
    <div className="editorWrapper">
      <div ref={containerRef} />
    </div>
  );
};

export default MarkdownEditor;
