import { useState } from "react";
import QRCode from "react-qr-code";
import QRCodeDownload from "qrcode";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import "./style.css";
function App() {
  const [url, setUrl] = useState("");
  const [downloadQrCode, setdownloadQrCode] = useState("");

  function handleUrl(event) {
    setUrl(event.target.value);
    handlePrintQrCode(event.target.value);
  }
  function handlePrintQrCode(link_url) {
    QRCodeDownload.toDataURL(
      link_url,
      {
        width: 600,
        margin: 3,
      },
      function (err, url) {
        setdownloadQrCode(url);
      }
    );
  }

  return (
    <main>
      <div className="container">
        <h1>Gerador de QrCode</h1>
        <QRCode value={url} />
        <input
          type="text"
          placeholder="Digite sua url..."
          value={url}
          onChange={(event) => handleUrl(event)}
        />
        <a
          className="qrCodeDownload"
          href={downloadQrCode}
          download={"gerador de QrCode - by Oswaldo Mauricio"}
        >
          Download <FaDownload />
        </a>
        <div>
          <p>Projeto feito por - Oswaldo Mauricio</p>
          <div className="socialMedia-main">
            <a
              className="socialMedia"
              href="https://github.com/oswaldomauricio"
              target="_blank"
            >
              <FaGithub />
            </a>
            <a
              className="socialMedia"
              href="https://www.linkedin.com/in/oswaldo-mauricio/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
