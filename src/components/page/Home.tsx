import Header from "@layout/Header";

function Home() {
  return (
    <div className="flex h-screen w-screen flex-col bg-base-200">
      <Header />
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 bg-amber-700 p-10">
          <div className="flex h-full flex-col items-center justify-center">
            <div className="text-4xl font-bold">Welcome to Loss nukide!</div>
            <div className="text-2xl">
              This site is a record book dedicated to Jiro Ramen.
            </div>
          </div>
          <div className="flex justify-center">
            <form
              action="http://127.0.0.1:8000/api/analyze-loss"
              method="post"
              encType="multipart/form-data"
            >
              <div className="card h-[500px] w-[700px] shadow-xl">
                <div className="card-body justify-between bg-yellow-300">
                  <div className="flex flex-col gap-5">
                    <h2 className="card-title flex justify-center text-3xl">
                      当店のルール
                    </h2>
                    <div className="text-lg text-gray-700">
                      以下のことを守って投稿してください。
                      <div className="flex flex-col gap-6">
                        <ul className="px-10">
                          <li className="list-decimal">
                            食べ終わった後の画像をアップロードしてください。
                          </li>
                          <li className="list-decimal">
                            皿が全て写っていることを確認してください。
                          </li>
                          <li className="list-decimal">
                            机の上に他のものが写っていないことを確認してください。
                          </li>
                          <li className="list-decimal">
                            なるべく暗い色の机の上で撮影してください。
                          </li>
                          <li className="list-decimal">最後に</li>
                        </ul>
                        <div className="flex justify-center text-2xl font-semibold text-red-500">
                          ※ロス抜きで！！
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card-actions justify-end">
                    <div className="flex w-full flex-row justify-between">
                      <input
                        type="file"
                        className="file-input file-input-bordered file-input-accent w-full max-w-xs"
                      />
                      <button type="submit" className="btn btn-accent">
                        アップロード
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
