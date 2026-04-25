export function generateApplication(data) {
  const {
    fullName,
    centerNo,
    village,
    gramPanchayat,
    startDate,
    endDate,
    reasonForLeave,
    
    
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
  const getReasonText = (reason) => {
  switch (reason) {
    case "illness":
      return "health issues";
    case "family function":
      return "an important family function";
    case "family emergency":
      return "a family emergency";
    case "personal work":
      return "personal commitments";
    case "child care":
      return "child care responsibilities";
    case "medical appointment":
      return "a scheduled medical appointment";;
    case "travel":
      return "travel requirements";
    default:
      return "";
      
  }
};
  let reasonText = getReasonText(reasonForLeave);

  let address = "";

let addressParts = [];

if (village) addressParts.push(village.trim());
if (gramPanchayat) addressParts.push(gramPanchayat.trim());

address = addressParts.join(", ");


  return `
To,       
The CDPO
Alipurduar II Block
P.O - Chaparerper
Dist - Alipurduar

Through the Supervisor

Subject: Application for Leave

Respected Sir/Madam,

I, ${fullName.trim()}, working at Anganwadi Center No. ${centerNo}, ${address}, would like to request leave ${dateText}due to ${reasonText}.

${isSameDate ?"Kindly grant me leave for the day.":"Kindly grant me leave for the mentioned period."}

Thank you.

Yours sincerely,
${fullName}
  `;
}