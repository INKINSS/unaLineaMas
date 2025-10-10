import { useState } from "react";
import { Copy } from "lucide-react"; // icono de copiar (opcional)

interface Props {
  code: string;
  language?: string; // opcional, para resaltado de sintaxis si quieres
}

const CopyBlock = ({ code, language = "bash" }: Props) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Error copiando al portapapeles", err);
    }
  };

  return (
    <div className="relative bg-gray-900 text-white my-4 overflow-hidden">
      {/* Botón de copiar */}
      <button
        onClick={handleCopy}
        className="absolute top-0 right-0 bg-gray-800 hover:bg-gray-700 text-white px-3 py-2 rounded-r-none text-xs flex items-center gap-1 transition"
      >
        <Copy size={12} />
        {copied ? "Copiado" : "Copiar"}
      </button>

      {/* Bloque de código */}
      <pre className="overflow-x-auto p-4 font-mono text-sm bg-gray-900 rounded-none">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
}

export default CopyBlock;