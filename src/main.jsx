
// // // import React, { useState } from "react";
// // // import ReactDOM from "react-dom/client";
// // // import './index.css';

// // // function PasswordGenerator() {
// // //   const [Password, setPassword] = useState("Get Your Secured Password"); // start with empty
// // //   const [length, setLength] = useState(10);
// // //   const [numberChanged, setNumberChanged] = useState(false);
// // //   const [charChanged, setCharChanged] = useState(false);
// // //   const [capital, setCapital] = useState(false);
// // //   const [small, setSmall] = useState(false);

// // //   function generatePassword() {
// // //     let str = "";
// // //     if (numberChanged) str += "0123456789";
// // //     if (charChanged) str += "+-*@#$%^&()~!_{}";
// // //     if (capital) str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// // //     if (small) str += "abcdefghijklmnopqrstuvwxyz";

// // //     let pass = "";
// // //     for (let i = 0; i < length; i++) {
// // //       pass += str[Math.floor(Math.random() * str.length)];
// // //     }
// // //     setPassword(pass);
// // //   }

// // //   return (
// // //     <div className="container">
// // //       <div> <p className="mainheading">Password Generator</p></div>
      
// // //       <div className="roots">
// // //       <h1 id="heading">{Password}</h1>
// // //       <div className="second">
      
// // //             <div className="slider-wrapper">
// // //           <input
// // //             type="range"
// // //             min={5}
// // //             max={50}
// // //             value={length}
// // //             className="slide"
// // //             onChange={(e) => setLength(Number(e.target.value))}
// // //           />
// // //         </div>

// // //         <div className="info">
// // //           <label>Length is : {length}</label>

// // //           <label> Include Uppercase
// // //           <input
// // //             type="checkbox"
// // //             checked={capital}
// // //             onChange={() => setCapital((prev) => !prev)}
// // //           />
// // //          </label>

// // //           <label>Include Lowercase
          
// // //           <input
// // //             type="checkbox"
// // //             checked={small}
// // //             onChange={() => setSmall((prev) => !prev)}
// // //           />
// // //       </label>
// // //   <label> Number
// // //           <input
// // //             type="checkbox"
// // //             checked={numberChanged}
// // //             onChange={() => setNumberChanged((prev) => !prev)}
// // //           />
          
// // //        </label>
// // // <label> Character
// // //           <input
// // //             type="checkbox"
// // //             checked={charChanged}
// // //             onChange={() => setCharChanged((prev) => !prev)}
// // //           />
// // //          </label>
       

// // //         <div>
// // //           <button className="glow-on-hover" onClick={generatePassword}>
// // //             Generate Password
// // //           </button>
// // //         </div>
// // //          </div>
// // //       </div>
// // // </div>

// // //     </div>
// // //   );
// // // }

// // // const root = ReactDOM.createRoot(document.getElementById("root"));
// // // root.render(<PasswordGenerator />);


// // import React, { useState } from "react";
// // import ReactDOM from "react-dom/client";
// // import './index.css';

// // function PasswordGenerator() {
// //   const [Password, setPassword] = useState("Get Your Secured Password");
// //   const [length, setLength] = useState(10);
// //   const [numberChanged, setNumberChanged] = useState(false);
// //   const [charChanged, setCharChanged] = useState(false);
// //   const [capital, setCapital] = useState(false);
// //   const [small, setSmall] = useState(false);

// //   function generatePassword() {
// //     let str = "";
// //     if (numberChanged) str += "0123456789";
// //     if (charChanged) str += "+-*@#$%^&()~!_{}";
// //     if (capital) str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// //     if (small) str += "abcdefghijklmnopqrstuvwxyz";

// //     let pass = "";
// //     for (let i = 0; i < length; i++) {
// //       pass += str[Math.floor(Math.random() * str.length)];
// //     }
// //     setPassword(pass);
// //   }

// //   return (
// //     <div className="container">
// //       <p className="mainheading">Password Generator</p>

// //       <div className="roots">
// //         <div className="password-box">
// //           <span className="password-text">{Password}</span>
// //           <button
// //             className="copy-btn"
// //             onClick={() => {
// //               navigator.clipboard.writeText(Password);
// //               // alert("Password copied to clipboard!");
// //             }}
// //           >
// //             📋
// //           </button>
// //         </div>

// //         <div className="second">
// //           <div className="slider-wrapper">
// //             <input
// //               type="range"
// //               min={5}
// //               max={50}
// //               value={length}
// //               className="slide"
// //               onChange={(e) => setLength(Number(e.target.value))}
// //             />
// //           </div>

// //           <div className="info">
// //             <label>Length is : {length}</label>

// //             <label>Include Uppercase
// //               <input
// //                 type="checkbox"
// //                 checked={capital}
// //                 onChange={() => setCapital((prev) => !prev)}
// //               />
// //             </label>

// //             <label>Include Lowercase
// //               <input
// //                 type="checkbox"
// //                 checked={small}
// //                 onChange={() => setSmall((prev) => !prev)}
// //               />
// //             </label>

// //             <label>Number
// //               <input
// //                 type="checkbox"
// //                 checked={numberChanged}
// //                 onChange={() => setNumberChanged((prev) => !prev)}
// //               />
// //             </label>

// //             <label>Character
// //               <input
// //                 type="checkbox"
// //                 checked={charChanged}
// //                 onChange={() => setCharChanged((prev) => !prev)}
// //               />
// //             </label>

// //             <div>
// //               <button className="glow-on-hover" onClick={generatePassword}>
// //                 Generate Password
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // const root = ReactDOM.createRoot(document.getElementById("root"));
// // root.render(<PasswordGenerator />);



// // import React, { useState ,useEffect} from "react";
// // import ReactDOM from "react-dom/client";
// // import './index.css';

// // function PasswordGenerator() {
// //   const [Password, setPassword] = useState("GET YOUR SECURED PASSWORD 🔐");
// //   const [length, setLength] = useState(10);
// //   const [numberChanged, setNumberChanged] = useState(false);
// //   const [charChanged, setCharChanged] = useState(false);
// //   const [capital, setCapital] = useState(false);
// //   const [small, setSmall] = useState(false);
// //   const [strength, setStrength] = useState("");
// //   const [passwordHistory, setPasswordHistory] = useState([]);


  
// //   function generatePassword() {
// //   let str = "";
// //     if (numberChanged) str += "0123456789";
// //     if (charChanged) str += "+-*@#$%^&()~!_{}";
// //     if (capital) str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// //     if (small) str += "abcdefghijklmnopqrstuvwxyz";

// //     let pass = "";
// //     for (let i = 0; i < length; i++) {
// //       pass += str[Math.floor(Math.random() * str.length)];
// //     }
  



// //     //history of passwords
// // setPassword(pass);

// // // Update password history (max 5 items)
// // setPasswordHistory((prev) => {
// //   const updated = [pass, ...prev];        // add new password to front
// //   return updated.slice(0, 5);             // keep only last 5
// // });
// //   }

// //   //logic for strength of the passwords 
// //   function calculateStrength() {
// //   let score = 0;
// //   if (capital) score++;
// //   if (small) score++;
// //   if (numberChanged) score++;
// //   if (charChanged) score++;
// //   if (length >= 8) score++;

// //   if (score <= 2) return "WEAK";
// //   else if (score === 3 || score === 4) return "MEDIUM";
// //   else return "STRONG";
// // }


// // useEffect(() => {
// //   setStrength(calculateStrength());
// // }, [capital, small, numberChanged, charChanged, length]);





// // const handleSliderChange = (e) => {
// //   const value = Number(e.target.value);
// //   setLength(value);

// //   const percent = ((value - 5) / (50 - 5)) * 100;
// //   document.documentElement.style.setProperty('--percent', `${percent}%`);
// // };



// //   return (
// //     <div className="container">
// //       <p className="mainheading">PASSWORD GENERATOR</p>

// //       <div className="roots">
// //         <div className="password-box">
// //           <span className="password-text">{Password}</span>
// //           <button
// //             className="copy-btn"
// //             onClick={() => {
// //               navigator.clipboard.writeText(Password);
// //               // alert("Password copied to clipboard!");
// //             }}
// //           >
// //               <i className="fa-solid fa-copy"></i>
// //           </button>
// //         </div>

// //         <div className="second">
// //           <div className="slider-wrapper">
// //             <input
// //               type="range"
// //               min={5}
// //               max={50}
// //               value={length}
// //               className="slide"
// //               onChange={handleSliderChange}
// //             />
// //           </div>

// //           <div className="box">
     

// // <div className="info">
// //             {/* <label className="length-label">Length is : {length}</label> */}
// //          {/* <div className="length-display">
// // <label className="length-label">Length : </label>
// //   <input type="number"  className="length-bar" value={length}  onChange={(e)=>setLength(e.target.value )} />
// //   </div> */}


// // <div className="length-display">
// //   <label className="length-label">LENGTH :</label>
// //   <div>
// //     <input
// //       type="number"
// //       className="length-bar"
// //       value={length}
// //       onChange={(e) => {
// //         const value = Number(e.target.value);
// //         if (value >= 5 && value <= 50) {
// //           setLength(value);
// //         }
// //       }}
// //       onBlur={(e) => {
// //         const value = Number(e.target.value);
// //         if (value < 5 || value > 50) {
// //           alert("⚠️ Password length must be between 5 and 50.");
// //           setLength(10); // reset to default or valid fallback
// //         }
// //       }}
// //     />
// //   </div>
// // </div>

          

// //             <label className="switch-label">

// //              INCLUDE UPPERCASE
// //               <label className="switch">
// //                 <input
// //                   type="checkbox"
// //                   checked={capital}
// //                   onChange={() => setCapital((prev) => !prev)}
// //                 />
// //                 <span className="slider round"></span>
// //               </label>
// //             </label>

// //             <label className="switch-label">
// //               INCLUDE LOWERCASE
// //               <label className="switch">
// //                 <input
// //                   type="checkbox"
// //                   checked={small}
// //                   onChange={() => setSmall((prev) => !prev)}
// //                 />
// //                 <span className="slider round"></span>
// //               </label>
// //             </label>

// //             <label className="switch-label">
// //               NUMBER
// //               <label className="switch">
// //                 <input
// //                   type="checkbox"
// //                   checked={numberChanged}
// //                   onChange={() => setNumberChanged((prev) => !prev)}
// //                 />
// //                 <span className="slider round"></span>
// //               </label>
// //             </label>

// //             <label className="switch-label">
// //               CHARACTER
// //               <label className="switch">
// //                 <input
// //                   type="checkbox"
// //                   checked={charChanged}
// //                   onChange={() => setCharChanged((prev) => !prev)}
// //                 />
// //                 <span className="slider round"></span>
// //               </label>
// //             </label>

// //            <div>
// //   <button  disabled={!numberChanged && !capital && !small && !charChanged} className="animated-button" onClick={generatePassword }>
// //     Generate Password
// //   </button>
// // </div>

// //           </div>


// //                  <div>
// //             {/* <div className="strength-container">
// //   <label className="strength-label">Strength</label>
// //   <div className={`strength-bar ${strength.toLowerCase()}`}>
// //     <span>{strength}</span>
// //   </div>
// // </div> */}

// // <div className="strength-container">
// //   <label className="strength-label">STRENGTH : {strength} </label>
// //   <div className="strength-visual">
// //     <div
// //       className={`strength-block ${
// //         strength === "WEAK"
// //           ? "fill-red"
// //           : strength === "MEDIUM"
// //           ? "fill-yellow"
// //           : strength === "STRONG"
// //           ? "fill-green"
// //           : ""
// //       }`}
// //     ></div>
// //     <div
// //       className={`strength-block ${
// //         strength === "MEDIUM"
// //           ? "fill-yellow"
// //           : strength === "STRONG"
// //           ? "fill-green"
// //           : ""
// //       }`}
// //     ></div>
// //     <div
// //       className={`strength-block ${strength === "STRONG" ? "fill-green" : ""}`}
// //     ></div>
// //   </div>
// // </div>




// // <div className="history-box">
// //   <h2>HISTORY 🔐📝</h2>
// //   <hr></hr>
// //   <ul>
// //     {passwordHistory.map((item, index) => (
// //       <li key={index}>{item}
// //       <hr></hr>
// //       </li>
// //     ))}
// //   </ul>
// // </div>


// // </div>


// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // const root = ReactDOM.createRoot(document.getElementById("root"));
// // root.render(<PasswordGenerator />);

// import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom/client";
// import './index.css';

// function PasswordGenerator() {
//   const [Password, setPassword] = useState("GET YOUR SECURED PASSWORD 🔐");
//   const [length, setLength] = useState(10);
//   const [numberChanged, setNumberChanged] = useState(false);
//   const [charChanged, setCharChanged] = useState(false);
//   const [capital, setCapital] = useState(false);
//   const [small, setSmall] = useState(false);
//   const [strength, setStrength] = useState("");
//   const [passwordHistory, setPasswordHistory] = useState([]);
//   const [percent, setPercent] = useState(0); // for slider fill

//   // Generate password logic
//   function generatePassword() {
//     let str = "";
//     if (numberChanged) str += "0123456789";
//     if (charChanged) str += "+-*@#$%^&()~!_{}";
//     if (capital) str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     if (small) str += "abcdefghijklmnopqrstuvwxyz";

//     if (str.length === 0) {
//       alert("⚠️ Please select at least one option.");
//       return;
//     }

//     let pass = "";
//     for (let i = 0; i < length; i++) {
//       pass += str[Math.floor(Math.random() * str.length)];
//     }

//     setPassword(pass);

//     // Save to history
//     setPasswordHistory((prev) => {
//       const updated = [pass, ...prev];
//       return updated.slice(0, 5);
//     });
//   }

//   // Calculate password strength
//   function calculateStrength() {
//     let score = 0;
//     if (capital) score++;
//     if (small) score++;
//     if (numberChanged) score++;
//     if (charChanged) score++;
//     if (length >= 8) score++;

//     if (score <= 2) return "WEAK";
//     else if (score === 3 || score === 4) return "MEDIUM";
//     else return "STRONG";
//   }

//   useEffect(() => {
//     setStrength(calculateStrength());
//   }, [capital, small, numberChanged, charChanged, length]);

//   const handleSliderChange = (e) => {
//     const value = Number(e.target.value);
//     setLength(value);
//     const calcPercent = ((value - 5) / (50 - 5)) * 100;
//     setPercent(calcPercent);
//   };

//   return (
//     <div className="container">
//       <p className="mainheading">PASSWORD GENERATOR</p>

//       <div className="roots">
//         <div className="password-box">
//           <span className="password-text">{Password}</span>
//           <button
//             className="copy-btn"
//             onClick={() => navigator.clipboard.writeText(Password)}
//           >
//             <i className="fa-solid fa-copy"></i>
//           </button>
//         </div>

//         <div className="second">
//           <div className="slider-wrapper">
//             <input
//               type="range"
//               min={5}
//               max={50}
//               value={length}
//               className="slide"
//               onChange={handleSliderChange}
//               style={{
//                 background: `linear-gradient(to right, white ${percent}%, black ${percent}%)`
//               }}
//             />
//           </div>

//           <div className="box">
//             <div className="info">
//               <div className="length-display">
//                 <label className="length-label">LENGTH :</label>
//                 <div>
//                   <input
//                     type="number"
//                     className="length-bar"
//                     value={length}
//                     onChange={(e) => {
//                       const value = Number(e.target.value);
//                       if (value >= 5 && value <= 50) {
//                         setLength(value);
//                         const calcPercent = ((value - 5) / (50 - 5)) * 100;
//                         setPercent(calcPercent);
//                       }
//                     }}
//                     onBlur={(e) => {
//                       const value = Number(e.target.value);
//                       if (value < 5 || value > 50) {
//                         alert("⚠️ Password length must be between 5 and 50.");
//                         setLength(10);
//                         setPercent(((10 - 5) / (50 - 5)) * 100);
//                       }
//                     }}
//                   />
//                 </div>
//               </div>

//               <label className="switch-label">
//                 INCLUDE UPPERCASE
//                 <label className="switch">
//                   <input
//                     type="checkbox"
//                     checked={capital}
//                     onChange={() => setCapital((prev) => !prev)}
//                   />
//                   <span className="slider round"></span>
//                 </label>
//               </label>

//               <label className="switch-label">
//                 INCLUDE LOWERCASE
//                 <label className="switch">
//                   <input
//                     type="checkbox"
//                     checked={small}
//                     onChange={() => setSmall((prev) => !prev)}
//                   />
//                   <span className="slider round"></span>
//                 </label>
//               </label>

//               <label className="switch-label">
//                 NUMBER
//                 <label className="switch">
//                   <input
//                     type="checkbox"
//                     checked={numberChanged}
//                     onChange={() => setNumberChanged((prev) => !prev)}
//                   />
//                   <span className="slider round"></span>
//                 </label>
//               </label>

//               <label className="switch-label">
//                 CHARACTER
//                 <label className="switch">
//                   <input
//                     type="checkbox"
//                     checked={charChanged}
//                     onChange={() => setCharChanged((prev) => !prev)}
//                   />
//                   <span className="slider round"></span>
//                 </label>
//               </label>

//               <div>
//                 <button
//                   className="animated-button"
//                   onClick={generatePassword}
//                   disabled={
//                     !numberChanged && !capital && !small && !charChanged
//                   }
//                 >
//                   Generate Password
//                 </button>
//               </div>
//             </div>

//             <div>
//               <div className="strength-container">
//                 <label className="strength-label">STRENGTH : {strength}</label>
//                 <div className="strength-visual">
//                   <div
//                     className={`strength-block ${
//                       strength === "WEAK"
//                         ? "fill-red"
//                         : strength === "MEDIUM"
//                         ? "fill-yellow"
//                         : strength === "STRONG"
//                         ? "fill-green"
//                         : ""
//                     }`}
//                   ></div>
//                   <div
//                     className={`strength-block ${
//                       strength === "MEDIUM"
//                         ? "fill-yellow"
//                         : strength === "STRONG"
//                         ? "fill-green"
//                         : ""
//                     }`}
//                   ></div>
//                   <div
//                     className={`strength-block ${
//                       strength === "STRONG" ? "fill-green" : ""
//                     }`}
//                   ></div>
//                 </div>
//               </div>

//               <div className="history-box">
//                 <h2>HISTORY 🔐📝</h2>
//                 <hr />
//                 <ul>
//                   {passwordHistory.map((item, index) => (
//                     <li key={index}>
//                       {item}
//                       <hr />
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<PasswordGenerator />);



import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import './index.css';

function PasswordGenerator() {
  const [Password, setPassword] = useState("GET YOUR SECURED PASSWORD 🔐");
  const [length, setLength] = useState(10);
  const [numberChanged, setNumberChanged] = useState(false);
  const [charChanged, setCharChanged] = useState(false);
  const [capital, setCapital] = useState(false);
  const [small, setSmall] = useState(false);
  const [strength, setStrength] = useState("");
  const [passwordHistory, setPasswordHistory] = useState([]);
  const [percent, setPercent] = useState(0);
  const [copied, setCopied] = useState(false); // Added copied state

  function generatePassword() {
    let str = "";
    if (numberChanged) str += "0123456789";
    if (charChanged) str += "+-*@#$%^&()~!_{}";
    if (capital) str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (small) str += "abcdefghijklmnopqrstuvwxyz";

    if (str.length === 0) {
      alert("⚠️ Please select at least one option.");
      return;
    }

    let pass = "";
    for (let i = 0; i < length; i++) {
      pass += str[Math.floor(Math.random() * str.length)];
    }

    setPassword(pass);

    setPasswordHistory((prev) => {
      const updated = [pass, ...prev];
      return updated.slice(0, 5);
    });
  }

  function calculateStrength() {
    let score = 0;
    if (capital) score++;
    if (small) score++;
    if (numberChanged) score++;
    if (charChanged) score++;
    if (length >= 8) score++;

    if (score <= 2) return "WEAK";
    else if (score === 3 || score === 4) return "MEDIUM";
    else return "STRONG";
  }

  useEffect(() => {
    setStrength(calculateStrength());
  }, [capital, small, numberChanged, charChanged, length]);

  const handleSliderChange = (e) => {
    const value = Number(e.target.value);
    setLength(value);
    const calcPercent = ((value - 5) / (50 - 5)) * 100;
    setPercent(calcPercent);
  };

  return (
    <div className="container">
      <p className="mainheading">PASSWORD GENERATOR</p>

      <div className="roots">
        <div className="password-box">
          <span className="password-text">{Password}</span>
          <button
            className="copy-btn"
            onClick={() => {
              navigator.clipboard.writeText(Password);
              setCopied(true);
              setTimeout(() => setCopied(false), 1500);
            }}
          >
            <i className="fa-solid fa-copy"></i>
          </button>
          {copied && <span className="copied-text">Copied!</span>}
        </div>

        <div className="second">
          <div className="slider-wrapper">
            <input
              type="range"
              min={5}
              max={50}
              value={length}
              className="slide"
              onChange={handleSliderChange}
              style={{
                background: `linear-gradient(to right, white ${percent}%, black ${percent}%)`
              }}
            />
          </div>

          <div className="box">
            <div className="info">
              <div className="length-display">
                <label className="length-label">LENGTH :</label>
                <div>
                  <input
                    type="number"
                    className="length-bar"
                    value={length}
                    onChange={(e) => {
                      const value = Number(e.target.value);
                      if (value >= 5 && value <= 50) {
                        setLength(value);
                        const calcPercent = ((value - 5) / (50 - 5)) * 100;
                        setPercent(calcPercent);
                      }
                    }}
                    onBlur={(e) => {
                      const value = Number(e.target.value);
                      if (value < 5 || value > 50) {
                        alert("⚠️ Password length must be between 5 and 50.");
                        setLength(10);
                        setPercent(((10 - 5) / (50 - 5)) * 100);
                      }
                    }}
                  />
                </div>
              </div>

              <label className="switch-label">
                INCLUDE UPPERCASE
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={capital}
                    onChange={() => setCapital((prev) => !prev)}
                  />
                  <span className="slider round"></span>
                </label>
              </label>

              <label className="switch-label">
                INCLUDE LOWERCASE
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={small}
                    onChange={() => setSmall((prev) => !prev)}
                  />
                  <span className="slider round"></span>
                </label>
              </label>

              <label className="switch-label">
                NUMBER
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={numberChanged}
                    onChange={() => setNumberChanged((prev) => !prev)}
                  />
                  <span className="slider round"></span>
                </label>
              </label>

              <label className="switch-label">
                CHARACTER
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={charChanged}
                    onChange={() => setCharChanged((prev) => !prev)}
                  />
                  <span className="slider round"></span>
                </label>
              </label>

              <div>
                <button
                  className="animated-button"
                  onClick={generatePassword}
                  disabled={
                    !numberChanged && !capital && !small && !charChanged
                  }
                >
                  Generate Password
                </button>
              </div>
            </div>

            <div>
              <div className="strength-container">
                <label className="strength-label">STRENGTH : {strength}</label>
                <div className="strength-visual">
                  <div
                    className={`strength-block ${
                      strength === "WEAK"
                        ? "fill-red"
                        : strength === "MEDIUM"
                        ? "fill-yellow"
                        : strength === "STRONG"
                        ? "fill-green"
                        : ""
                    }`}
                  ></div>
                  <div
                    className={`strength-block ${
                      strength === "MEDIUM"
                        ? "fill-yellow"
                        : strength === "STRONG"
                        ? "fill-green"
                        : ""
                    }`}
                  ></div>
                  <div
                    className={`strength-block ${
                      strength === "STRONG" ? "fill-green" : ""
                    }`}
                  ></div>
                </div>
              </div>

              <div className="history-box">
                <h2>HISTORY 🔐📝</h2>
                <hr />
                <ul>
                  {passwordHistory.map((item, index) => (
                    <li key={index}>
                      {item}
                      <hr />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<PasswordGenerator />);
