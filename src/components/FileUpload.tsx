import { Fragment, useState } from "react";

export default function VisioViewer() {
  const [fileUrl, setFileUrl] = useState<string>("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileUrl("https://1drv.ms/u/c/abf98a80ef9a796d/IQSIXTWNmj8FQ5xSMz68xlP1AYiE7jFjGRHBfUEtdlicO68");
    }
  };

  const styles = {
    container: {
      minHeight: "100vh",
      background: "linear-gradient(135deg, #e0f2fe 0%, #c7d2fe 100%)",
      padding: "24px",
      direction: "rtl" as const,
      fontFamily: "Arial, sans-serif"
    },
    wrapper: {
      maxWidth: "1200px",
      margin: "0 auto"
    },
    header: {
      background: "#ffffff",
      borderRadius: "16px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      padding: "32px",
      marginBottom: "24px"
    },
    headerTitle: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      marginBottom: "8px"
    },
    icon: {
      width: "32px",
      height: "32px",
      color: "#4f46e5"
    },
    title: {
      fontSize: "28px",
      fontWeight: "bold",
      color: "#1f2937",
      margin: 0
    },
    subtitle: {
      color: "#6b7280",
      marginRight: "44px",
      marginTop: "8px"
    },
    uploadSection: {
      background: "#ffffff",
      borderRadius: "16px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      padding: "32px",
      marginBottom: "24px"
    },
    uploadArea: {
      border: "2px dashed #a5b4fc",
      borderRadius: "12px",
      padding: "48px 32px",
      textAlign: "center" as const,
      cursor: "pointer",
      transition: "all 0.3s ease"
    },
    uploadIcon: {
      width: "48px",
      height: "48px",
      margin: "0 auto 16px",
      color: "#4f46e5"
    },
    uploadTitle: {
      fontSize: "18px",
      fontWeight: "600",
      color: "#374151",
      marginBottom: "8px"
    },
    uploadSubtitle: {
      fontSize: "14px",
      color: "#9ca3af"
    },
    hiddenInput: {
      display: "none"
    },
    viewerSection: {
      background: "#ffffff",
      borderRadius: "16px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      padding: "16px",
      animation: "fadeIn 0.5s ease-out"
    },
    statusBar: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      marginBottom: "16px",
      paddingRight: "16px"
    },
    statusDot: {
      width: "8px",
      height: "8px",
      background: "#10b981",
      borderRadius: "50%",
      animation: "pulse 2s infinite"
    },
    statusText: {
      fontSize: "14px",
      fontWeight: "500",
      color: "#374151"
    },
    iframeWrapper: {
      borderRadius: "12px",
      overflow: "hidden",
      border: "1px solid #e5e7eb"
    },
    iframe: {
      border: "none",
      background: "#f9fafb"
    }
  };

  const [isHovered, setIsHovered] = useState(false);

  const uploadAreaHoverStyle = isHovered ? {
    ...styles.uploadArea,
    borderColor: "#6366f1",
    background: "#eef2ff"
  } : styles.uploadArea;

  return (
    <Fragment>
      <div style={styles.container}>
        <div style={styles.wrapper}>
          {/* Header */}
          <div style={styles.header}>
            <div style={styles.headerTitle}>
              <svg style={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <h2 style={styles.title}>عارض ملفات Visio</h2>
            </div>
            <p style={styles.subtitle}>قم برفع ملف Visio الخاص بك لعرضه مباشرة</p>
          </div>

          {/* Upload Section */}
          <div style={styles.uploadSection}>
            <label>
              <div 
                style={uploadAreaHoverStyle}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <svg style={styles.uploadIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <p style={styles.uploadTitle}>اضغط لاختيار ملف Visio</p>
                <p style={styles.uploadSubtitle}>الصيغ المدعومة: .vsdx, .vsd</p>
                <input
                  type="file"
                  accept=".vsdx,.vsd"
                  onChange={handleFileChange}
                  style={styles.hiddenInput}
                />
              </div>
            </label>
          </div>

          {/* Viewer Section */}
          {fileUrl && (
            <div style={styles.viewerSection}>
              <div style={styles.statusBar}>
                <div style={styles.statusDot}></div>
                <span style={styles.statusText}>معاينة الملف</span>
              </div>
              <div style={styles.iframeWrapper}>
                <iframe
                  src={fileUrl}
                  width="100%"
                  height="600px"
                  style={styles.iframe}
                  title="Visio Preview"
                  allow="fullscreen"
                  sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </Fragment>
  );
}