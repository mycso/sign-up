import { MdInfoOutline } from "react-icons/md";

function Treats() {
  return (
    <div>
      <h1>How about some treats?</h1>
      <div>These will be included each time your box is delivered.</div>
      <div>
        <ul
          style={{
            display: "grid",
            gridGap: "10px",
            gridTemplateColumns: "1fr 1fr",
            alignItems: "center"
          }}
        >
          <li>
            <div>
              <h4>Bone Broth x 2</h4>
              <img
                width="100%"
                src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Ff1604505123603x288475184301679500%2Fbone%2520broth%2520front.png?w=192&h=205&auto=compress&dpr=1&fit=max"
              />
              <div>
                <MdInfoOutline />
              </div>
              <div>
                <button type="button">-</button>0
                <button type="button">+</button>
              </div>
            </div>
          </li>
          <li>
            <div>
              <h4>Chicken Chews</h4>
              <img
                width="100%"
                src="https://differentdog.wpengine.com/wp-content/uploads/2021/08/DD_061.jpeg"
              />
              <div>
                <MdInfoOutline />
              </div>
              <div>
                <button type="button">-</button>0
                <button type="button">+</button>
              </div>
            </div>
          </li>
          <li>
            <div>
              <h4>Liver with Love</h4>
              <img
                width="100%"
                src="https://differentdog.wpengine.com/wp-content/uploads/2021/08/Liver-with-love-75g.png"
              />
              <div>
                <MdInfoOutline />
              </div>
              <div>
                <button type="button">-</button>0
                <button type="button">+</button>
              </div>
            </div>
          </li>
          <li>
            <div>
              <h4>Animotics Probiotic Paste</h4>
              <img
                width="100%"
                src="https://differentdog.wpengine.com/wp-content/uploads/2021/04/Screenshot-2021-04-23-at-17.50.33.png"
              />
              <div>
                <MdInfoOutline />
              </div>
              <div>
                <button type="button">-</button>0
                <button type="button">+</button>
              </div>
            </div>
          </li>
          <li>
            <div>
              <h4>Compostable Dog Poo Bags</h4>
              <img
                width="100%"
                src="https://differentdog.wpengine.com/wp-content/uploads/2021/02/2b484f9a-0ed3-4da6-b14e-11f425279cbf-1536x1536-1.jpg"
              />
              <div>
                <MdInfoOutline />
              </div>
              <div>
                <button type="button">-</button>0
                <button type="button">+</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div
      // style={{
      //   position: "fixed",
      //   display: "block",
      //   width: "100%",
      //   height: "300px"
      // }}
      >
        <div>
          <p>Treats total: 0</p>
        </div>
      </div>
    </div>
  );
}
export default Treats;
