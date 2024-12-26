function JiroCall() {
  return (
    <div className="flex h-screen w-screen flex-col bg-base-200 p-5">
      <div className="chat chat-start">
        <div className="avatar chat-image">
          <div className="w-56 overflow-hidden rounded-full">
            <img
              alt="ramen_tenin"
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEifk-v6oovaeO438JuH55DE0rUmy82Ltg5LJE9nuw-VbDoTD7bga5dNxf-U51-aHhYGirD4kR0twNxC9kZ48VzI_wD01Hpt7flGrHeW0T_aUZvmJut6ZkPX_CbZVLW2ATocgd2ILrv1BXee/s400/ramen_tenin.png"
              className="object-cover object-top"
            />
          </div>
        </div>
        <div className="chat-bubble bg-yellow-200 p-5 text-4xl text-black">
          にんにくいれますか？
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h2>ラーメンの詳細を追加</h2>
        <form className="flex w-2/3 flex-col gap-2">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label>
                店名
                <input
                  type="text"
                  placeholder="店名を入力"
                  className="input w-full"
                />
              </label>
              <label>
                麺量
                <input
                  type="number"
                  placeholder="麺量を入力"
                  className="input w-full"
                />
              </label>
              <label>
                野菜の量
                <select className="select w-full">
                  <option disabled selected>
                    野菜の量を選択
                  </option>
                  <option>マシマシ</option>
                  <option>マシ</option>
                  <option>普通</option>
                  <option>少なめ</option>
                </select>
              </label>
              <label>
                ニンニクの量
                <select className="select w-full">
                  <option disabled selected>
                    ニンニクの量を選択
                  </option>
                  <option>マシマシ</option>
                  <option>マシ</option>
                  <option>普通</option>
                  <option>少なめ</option>
                </select>
              </label>
              <label>
                カラメの量
                <select className="select w-full">
                  <option disabled selected>
                    カラメの量を選択
                  </option>
                  <option>マシマシ</option>
                  <option>マシ</option>
                  <option>普通</option>
                  <option>少なめ</option>
                </select>
              </label>
              <label>
                アブラの量
                <select className="select w-full">
                  <option disabled selected>
                    アブラの量を選択
                  </option>
                  <option>マシマシ</option>
                  <option>マシ</option>
                  <option>普通</option>
                  <option>少なめ</option>
                </select>
              </label>
            </div>
            <button className="btn btn-primary">以上！！</button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default JiroCall;
