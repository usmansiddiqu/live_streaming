import React, { useEffect, useState } from "react";
import Cross from "../../../../Assets/Icons/close.png";
import Edit from "../../../../Assets/Icons/editing.png";
import { useNavigate } from "react-router-dom";
import deleteBadWord from "../../../../api/deleteBadWord";
import getBadWord from "../../../../api/getBadWord";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

function BadWords() {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [open, setOpen] = useState(false);
  const [eventId, setEventId] = useState();

  const handleButtonClick = (id) => {
    navigate(`/admin/bad_word/editbadword${id}`);
  };
  const handleCreateButtonClick = () => {
    navigate("/admin/bad_word/addbadword");
  };
  const getData = async () => {
    const { data: response } = await getBadWord();
    console.log(response);
    setData(response.data);
  };
  const handleClickOpen = (id) => {
    setOpen(true);
    setEventId(id);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const deleteHandler = async () => {
    await deleteBadWord(eventId);
    getData();
    setOpen(false);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div
      style={{
        background: "black",
        position: "relative",
        // left: "14%",
        width: "100%",
        height: "100%",
        overflowY: "scroll",
      }}
    >
      <div className=" ml-4 mt-20 ">
        <div>
          <div
            className="w-[80vw] box edit-con bg-[#1C1C1E] mx-auto rounded p-5"
            style={{ position: "absolute", left: "16.5%" }}
          >
            <div class="relative overflow-x-auto shadow-md ">
              <button
                className="w-[125px] h-[4vh] bg-[#0EAC5C] Add-tv font-medium rounded-md flex items-center justify-evenly"
                onClick={handleCreateButtonClick}
              >
                <svg
                  fill="#FFFFFF"
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19,11H13V5a1,1,0,0,0-2,0v6H5a1,1,0,0,0,0,2h6v6a1,1,0,0,0,2,0V13h6a1,1,0,0,0,0-2Z" />
                </svg>
                <span className="text-white text-sm dark:text-white">
                  Add Bad Word
                </span>
              </button>
              <table class="w-full mt-5 text-sm text-left rtl:text-right text-white">
                <thead class=" w-[78vw] text-xs text-white">
                  <tr>
                    <th
                      scope="col"
                      class="px-6 py-3 text-white text-md"
                      style={{ border: "1px solid #313133" }}
                    >
                      Words
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-white"
                      style={{ border: "1px solid #313133" }}
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data ? (
                    data.map((coupon) => (
                      <tr>
                        <td
                          class="px-6 py-4 text-white "
                          style={{ border: "1px solid #313133" }}
                        >
                          <div className="flex">{coupon.word}</div>
                        </td>
                        <td
                          class="px-6 py-4 text-white "
                          style={{ border: "1px solid #313133" }}
                        >
                          <div className="flex">
                            {/* <button
                              variant="outlined"
                              onClick={() => {
                                handleClickOpen();
                              }}
                              className="  ml-3  relative w-[36px] h-[33px] rounded z-10 bg-[#10C469] hover:before:absolute hover:before:bg-black hover:before:content-['Edit'] hover:before:p-2 hover:before:rounded hover:before:shadow-md hover:before:-top-full  hover:before:mt-[-18px]"
                            >
                              <img
                                src={Edit}
                                alt=""
                                className="w-[16px] h-[16px] m-auto"
                              />
                            </button> */}
                            <button
                              onClick={() => {
                                handleClickOpen(coupon._id);
                              }}
                              className="ml-3 w-[36px] h-[33px] rounded relative z-10 bg-[#FF5B5B] hover:before:absolute hover:before:bg-black hover:before:content-['Remove'] hover:before:p-2 hover:before:rounded hover:before:shadow-md hover:before:-top-full hover:before:mt-[-18px]"
                            >
                              <img
                                src={Cross}
                                alt=""
                                className="w-[10px] h-[10px] m-auto"
                              />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <></>
                  )}
                </tbody>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      Are you sure you want to delete this?
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={() => deleteHandler()} autoFocus>
                      Delete
                    </Button>
                  </DialogActions>
                </Dialog>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BadWords;
