import { Fragment, useState } from "react";
import { Upload, FileText } from "lucide-react";

export default function VisioViewer() {
  const [fileUrl, setFileUrl] = useState<string>("");

  // لما المستخدم يختار ملف من جهازه
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileUrl("https://1drv.ms/u/c/abf98a80ef9a796d/IQSIXTWNmj8FQ5xSMz68xlP1AYiE7jFjGRHBfUEtdlicO68");
    }
  };

  return (
    <Fragment>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6" dir="rtl">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
            <div className="flex items-center gap-3 mb-2">
              <FileText className="w-8 h-8 text-indigo-600" />
              <h2 className="text-3xl font-bold text-gray-800">
                عارض ملفات Visio
              </h2>
            </div>
            <p className="text-gray-600 mr-11">
              قم برفع ملف Visio الخاص بك لعرضه مباشرة
            </p>
          </div>

          {/* Upload Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
            <label className="block">
              <div className="border-2 border-dashed border-indigo-300 rounded-xl p-8 text-center cursor-pointer hover:border-indigo-500 hover:bg-indigo-50 transition-all duration-300">
                <Upload className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                <p className="text-lg font-semibold text-gray-700 mb-2">
                  اضغط لاختيار ملف Visio
                </p>
                <p className="text-sm text-gray-500">
                  الصيغ المدعومة: .vsdx, .vsd
                </p>
                <input
                  type="file"
                  accept=".vsdx,.vsd"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </div>
            </label>
          </div>

          {/* Viewer Section */}
          {fileUrl && (
            <div className="bg-white rounded-2xl shadow-lg p-4 animate-fadeIn">
              <div className="flex items-center gap-2 mb-4 px-4">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">
                  معاينة الملف
                </span>
              </div>
              <div className="rounded-xl overflow-hidden border border-gray-200">
                <iframe
                  src={fileUrl}
                  width="100%"
                  height="600px"
                  style={{ border: "none" }}
                  title="Visio Preview"
                  allow="fullscreen"
                  sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                  className="bg-gray-50"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      <style >{`
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
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </Fragment>
  );
}