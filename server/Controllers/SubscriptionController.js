import SubscriptionModel from "../Models/SubscriptionModel.js";
import UserModel from "../Models/AuthModel.js";
import nodemailer from "nodemailer";


const  PLANS={
    Free:{duration:5, cost:0},
    Bronze:{duration:7, cost:10},
    Silver:{duration:10, cost:50},
    Gold:{duration:null, cost:100},

};

const processPayment  = async(userId, amount)=>{
    return new promise((resolve)=>{
        settimeout(()=>resolve({success:true, transactionId:`TXN-${Date.now()}`}), 2000);
    });
};

export const upgradeSubscription = async (req, res)=>{
    const {userId, plan}= req.body;

    if(!PLANS[plan]) return res.status(400).json({message:"Invalid plan Selected"});

    try {
        const paymentResult= await processPayment(userId, PLANS[plan].cost);
        if(!paymentResult) return res.status(400).json({message:"Payment Failed!"});

        const expiresAt = PLANS[plan].duration ? new Date(Date.now() + PLANS[plan].duration * 60000) : null;
        const subscription = await SubscriptionModel.findOneAndUpdate(
            {userid},
            {plan, expiresAt},
            {new: true, upsert:true},
        );

        await sendInvoiceEmail(userId, plan, PLANS[plan].cost, paymentResult.transactionId);
        res.status(200).json({message:"Subscription upgraded successfully", subscription});

    } catch (error) {
        res.status(500).json({ message: "Opps, Server error", error });
    }

}

const sendInvoiceEmail = async (userId, plan, amount, transactionId)=>{
    const user = await UserModel.findById(userid);
    if(!user) return;

    const transporter = nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:process.env.EMAIL_USER,
            pass:process.env.EMAIL_PASS,
        },
    });

    const mailOptons= {
        from: process.env.EMAIL_USER,
        to: user.email,
        subject: "Subscription Invoice",
        text:`Dear  ${user.name}, \n\n You Have Successfully Subscribed to the ${plan} plan. \n Amount paid: ${amount} \n Transaction Id: ${transactionId} \n\n Thank you for your support.`,
    };
    await transporter.sendMail(mailOptons);
};


