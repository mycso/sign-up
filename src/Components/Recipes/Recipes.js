import { MdInfoOutline } from "react-icons/md";

function Recipes() {
  return (
    <div>
      <h1>Time to choose your Recipes!</h1>
      <div>
        All our recipes are nutritionally balanced by our on board vet &
        nutritionist.
      </div>
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
              <h4>Braised Beef</h4>
              <img
                width="100%"
                src="https://differentdog.wpengine.com/wp-content/uploads/2019/09/turkey-fricassee-raw.jpg"
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
              <h4>Lamb Hotpot</h4>
              <img
                width="100%"
                src="https://differentdog.wpengine.com/wp-content/uploads/2019/09/turkey-fricassee-raw.jpg"
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
              <h4>Chicken Casserole</h4>
              <img
                width="100%"
                src="https://differentdog.wpengine.com/wp-content/uploads/2019/09/turkey-fricassee-raw.jpg"
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
              <h4>Turkey Fricassee</h4>
              <img
                width="100%"
                src="https://differentdog.wpengine.com/wp-content/uploads/2019/09/turkey-fricassee-raw.jpg"
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
              <h4>Shepherd's Pie</h4>
              <img
                width="100%"
                src="https://differentdog.wpengine.com/wp-content/uploads/2019/09/turkey-fricassee-raw.jpg"
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
              <h4>Pawfect Picnic</h4>
              <img
                width="100%"
                src="https://differentdog.wpengine.com/wp-content/uploads/2019/09/turkey-fricassee-raw.jpg"
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
              <h4>Chef's Special: Venison & Thyme</h4>
              <img
                width="100%"
                src="https://differentdog.wpengine.com/wp-content/uploads/2019/09/turkey-fricassee-raw.jpg"
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
              <div>Health</div>
              <h4>Keep-Me-Trim Turkey</h4>
              <img
                width="100%"
                src="https://differentdog.wpengine.com/wp-content/uploads/2019/09/turkey-fricassee-raw.jpg"
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
              <div>Health</div>
              <h4>Comforting Chicken</h4>
              <img
                width="100%"
                src="https://differentdog.wpengine.com/wp-content/uploads/2019/09/turkey-fricassee-raw.jpg"
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
              <div>Health</div>
              <h4>Hearty Beef and Berries</h4>
              <img
                width="100%"
                src="https://differentdog.wpengine.com/wp-content/uploads/2019/09/turkey-fricassee-raw.jpg"
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
          <p>1000g packs in your plan: 7</p>
          <p>Packs still to select: 0</p>
        </div>
        <p>
          Just hit "Back" if you want to change the number of packs in your
          plan.
        </p>
      </div>
    </div>
  );
}
export default Recipes;
