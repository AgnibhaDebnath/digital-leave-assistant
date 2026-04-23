export function generateApplication(data) {
  const {
    fullName,
    centerNo,
    village,
    gramPanchayat,
    startDate,
    endDate,
    reasonForLeave,
    reasonDetails,
    
  } = data;

let dateText = "";
        const isSameDate =
            startDate?.toDateString() === endDate?.toDateString();

        if (isSameDate) {
            dateText = `on ${startDate.toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric"
            })
                } `;
        } else {
            dateText = `from ${startDate.toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric"
            })} to ${endDate.toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric"
            })} `;
    }
let reasonText = reasonForLeave ? reasonForLeave : reasonDetails;

  let address = "";

  if (village) address += `${village}, `;
  if (gramPanchayat) address += `${gramPanchayat}, `;


  return `
To,       
The CDPO
Alipurduar II Block
P.O - Chaparerper
Dist - Alipurduar

Through the Supervisor

Subject: Application for Leave

Respected Sir/Madam,

I, ${fullName}, working at Anganwadi Center No. ${centerNo}, ${address.toLowerCase()}would like to request leave ${dateText} due to ${reasonText}.

${isSameDate ?"kinldy grant me leave fot the day.":"Kindly grant me leave for the mentioned period."}

Thank you.

Yours sincerely,
${fullName}
  `;
}