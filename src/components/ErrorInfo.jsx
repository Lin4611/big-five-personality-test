const ErrorInfo = ({ error }) => {
  return (
    <main className="w-full h-screen flex flex-col justify-center items-center gap-4">
      <p className="text-xl text-[#00000098] font-bold">
        資料載入失敗，請檢查網路連線。
      </p>
      {error && (
        <p className="text-sm text-red-500/70 font-mono bg-red-50 px-4 py-2 rounded">
          Error: {error.message || "Unknown error"}
        </p>
      )}

      <button
        onClick={() => window.location.reload()}
        className="mt-2 px-6 py-2 bg-[#4F61FF] text-white rounded hover:bg-[#3d4ce0] transition-colors shadow-lg shadow-[#4F61FF]/20"
      >
        重新載入
      </button>
    </main>
  );
};
export default ErrorInfo;
