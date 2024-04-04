// js at once can do only one thing

import chalk from 'chalk';
import ChalkAnimation from 'chalk-animation';
import inquire from 'inquirer';
import { createSpinner } from 'nanospinner'
import figgy from 'figlet';
import http from "http";
import nodemailer from "nodemailer";

let email;
let palyer_name;


const server = http.createServer((request, response) => {
    const auth = nodemailer.createTransport({
        service: "gmail",
        secure: true,
        port: 465,
        auth: {
            user: "youmillion05@gmail.com",
            pass: "oecxmpvphigenqfy"
        }
    })

    const receiver = {
        from : "youmillion05@gmail.com",
        to : `${email}`,
        subject : "Credited : $100,000!",
        text : `Congratulations! ${palyer_name} you are the Winner of the JavaScript Millionaire Project` 
    }

    auth.sendMail(receiver, function (err, emailResponse) {
        if (err) throw err;
        console.log("success")
        response.end()
    })
})



async function welcome() {

    ChalkAnimation.rainbow("Welcome to the JavaScript Millionaire Project")

    setTimeout(function () {
        console.log(`
        ${chalk.bgBlue(" HOW TO PLAY ")}
        I am process on your computer
        If I get any question wrong, I will be ${chalk.red("Killed")}
        So get all the questions ${chalk.green("Right")}
        `)
        inquire.prompt([
            {
                name: "palyer_name",
                message: "What is your name? ",
            },
        ]).then((ans) => {
            palyer_name = ans.palyer_name
        }).then(() => {
            console.log()
            let rad1 = ChalkAnimation.rainbow("-----------")
            setTimeout(() => {
                rad1.stop()
                console.log()
                inquire.prompt([
                    {
                        type: "list",
                        name: "avenger",
                        message: "Which Avenger was able to pick thor's Hammer? ",
                        choices: ["Spider Man", "Iron Man", "Captain America", "Wanda"]
                    }
                ]).then((ans) => {
                    const spinner = createSpinner('Checking Solution...').start()
                    if (ans.avenger !== "Captain America") {
                        setTimeout(() => {
                            spinner.error("mark", ":(")
                            console.log(chalk.red(ans.avenger))
                            process.exit(1)
                        }, 1500)
                    } else {
                        setTimeout(() => {
                            spinner.success({ "mark": ":)" })
                            console.log(chalk.green(ans.avenger))
                        }, 1500)
                    }
                }).then(() => {
                    setTimeout(() => {
                        console.log()
                        let load2 = ChalkAnimation.rainbow("-----------");
                        setTimeout(() => {
                            load2.stop();
                            console.log()
                            inquire.prompt([
                                {
                                    type: "list",
                                    name: "avenger",
                                    message: "Which cereal grain is the most commonly used in beer? ",
                                    choices: ["Wheat", "Barley", "Hops", "Rice"]
                                }
                            ]).then((ans) => {
                                const spinner = createSpinner('Checking Solution...').start()
                                if (ans.avenger !== "Barley") {
                                    setTimeout(() =>{
                                        spinner.error("mark", ":(");
                                        console.log(chalk.red(ans.avenger))
                                        process.exit(1);
                                    }, 1500)
                                } else {
                                    setTimeout(() => {
                                        spinner.success({ "mark": ":)" });
                                        console.log(chalk.green(ans.avenger))
                                    }, 1500)
                                }
                            }).then(() =>{
                                setTimeout(() => {
                                    console.log()
                                    let load3 = ChalkAnimation.rainbow("-----------")
                                    setTimeout(() =>{
                                        load3.stop()
                                        console.log()
                                        inquire.prompt([
                                            {
                                                type: "list",
                                                name: "avenger",
                                                message: "Which animal kills the most humans annually? ",
                                                choices: ["Bees", "Mosquitoes", "Sharks", "Alligators"]
                                            }
                                        ]).then((ans) =>{
                                            const spinner = createSpinner('Checking Solution...').start()
                                            if (ans.avenger === "Mosquitoes"){
                                                setTimeout(() =>{
                                                    spinner.success({ "mark": ":)" })
                                                    console.log(chalk.green(ans.avenger));
                                                }, 1500)
                                            }else{
                                                setTimeout(() =>{
                                                    spinner.error("mark", ":(")
                                                    console.log(chalk.red(ans.avenger)); 
                                                    process.exit(1);  
                                                }, 1500)
                                            }
                                        }).then(() =>{
                                            setTimeout(() => {
                                                console.log()
                                                let load4 = ChalkAnimation.radar("------------------------------------------------------------------------------------------------")
                                                setTimeout(() =>{
                                                    load4.stop()
                                                    console.log(chalk.blueBright("You Won!!!"))
                                                    figgy("100,000", function(err, data){
                                                        if (err){
                                                            console.log(err)
                                                            return;
                                                        } 
                                                        console.log(data)
                                                        server.listen(8080)
                                                    })
                                                }, 7200)
                                            }, 2000)    
                                        })
                                    }, 1500)
                                }, 2000)
                            })
                        }, 1500)
                    }, 2000);

                })

            }, 1500)
        })

    }, 1500)
}

// the new b local repo of git
// this is the most dangerous code


// to start the server and listen for the requests
console.log()
inquire.prompt([
    {
        name: "email",
        message: "Enter your email: "
    }
]).then((ans) => {
    email = ans.email;
    console.log()
    welcome()
})
